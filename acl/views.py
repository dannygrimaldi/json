from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.
def submit(request):
    return render(request, 'acl/submit.html')


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")



def nueva_vista(request):
    # Lógica de la vista
    return render(request, 'acl/nueva_vista.html')


@csrf_exempt
def guardar_datos_seleccionados(request):
    if request.method == 'POST' and request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        datos_seleccionados = json.loads(request.body)
        
        print(datos_seleccionados)
        # Realiza las operaciones necesarias con los datos seleccionados
        
        # Ejemplo: Guardar los datos en la base de datos
        
        return JsonResponse({'success': True})

    return JsonResponse({'success': False, 'message': 'Error en la solicitud'})

