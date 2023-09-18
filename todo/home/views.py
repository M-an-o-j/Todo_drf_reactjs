from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, generics
from .models import TodoModel
from .serializers import TodoSerializer, RegisterSerializer, LoginSerializer, UserSerializer
from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User

class GetUserByUsername(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

class LoginAPI(APIView):
    def post(self, request):
        data = request.data
        print(data)
        serializer = LoginSerializer(data=data)
        if not serializer.is_valid():
            return Response({
                'status': False,
                'message': serializer.errors
            }, status.HTTP_400_BAD_REQUEST)
        print(serializer.data)
        user = authenticate(
            username=serializer.data['username'], password=serializer.data['password'])
        print(user)
        # user_detail = User.objects.get(username=serializer.data['username'], email= serializer.data['email'], password = serializer.data['password'])
        # print(user_detail)
        token, _ = Token.objects.get_or_create(user=user)
        response = Response({'status': True, 'message': 'User Logged in', 'Token': str(
            token)}, status.HTTP_201_CREATED)
        response.set_cookie(
            "token", token, domain="http://localhost:3000/", secure=True, max_age=3600)
        return response


class LogoutAPI(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def post(self, request):
        print(request)
        print(request.user.is_authenticated)
        try:
            # Delete the user's token to logout
            request.user.auth_token.delete()
            return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class RegisterAPI(APIView):

    def post(self, request):
        data = request.data
        serializer = RegisterSerializer(data=data)

        if not serializer.is_valid():
            return Response({
                'status': False,
                'message': serializer.errors
            }, status.HTTP_400_BAD_REQUEST)

        serializer.save()

        return Response({'status': True, 'message': 'User Created'}, status.HTTP_201_CREATED)


class TodoAPI(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request):
        objs = TodoModel.objects.all()
        print("get method")
        serializer = TodoSerializer(objs, many=True)
        return Response(serializer.data)

    def post(self, request):
        data = request.data
        serializer = TodoSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors)

    # elif request.method == 'PATCH':
    #     data = request.data
    #     obj = TodoModel.objects.get(id=data['id'])
    #     serializer = TodoSerializer(obj, data=data, partial=True)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)

    #     return Response(serializer.data)

    def delete(self, request):
        data = request.query_params.get('id')
        print(data)
        obj = TodoModel.objects.get(id=data)
        obj.delete()
        return Response({'message': 'Person deleted'})
