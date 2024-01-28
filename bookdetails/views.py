from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render,redirect
from .models import book,user,ordereditem
import json
# Create your views here.
def home(request):
    request.session.set_expiry(0)
    try:
        username=request.session['user']
        items=ordereditem.objects.filter(username=username)
        b=[]
        for item in items:
            if item.book_names not in b:
                b.append(item.book_names)
        #print(b)
        books = book.objects.exclude(book_name__in=b)
        ctx={'books':books,'user':username}
        return render(request,"home.html",ctx)
    except:
        books = book.objects.all()
        ctx={'books':books}
        return render(request,"home.html",ctx)


def clear_session(request):
    # Clear the session
    request.session.flush()

    return redirect('login')


def bookdetails(request,id):
    #print(id)
    request.session.set_expiry(0)
    details=book.objects.filter(id=id)
    #print(len(details))
    if len(details)==1:
        try:
            username=request.session['user']

            ctx={'details':details,'user':username}
            return render(request,"book_details.html",ctx)
        except:
            ctx={'details':details}
            return render(request,"book_details.html",ctx)
        
    else:
        try:
            username=request.session['user']
            ctx={'err':"Please select the book on home page",'user':username}
            return render(request,"book_details.html",ctx)
        except:
            ctx={'err':"Please select the book on home page"}
            return render(request,"book_details.html",ctx)
        
def user_login(request):
    request.session.set_expiry(0)
    log=user.objects.all()


    if request.POST:
        usern = request.POST.get('username')
        pwd =request.POST.get('password')
        for i in log:
            if i.username==usern and i.password==pwd:
                request.session['user']=usern
                return redirect('home')
            else:
                return redirect('login')
    
    return render(request,"userlogin.html")
def ordered(request):
    request.session.set_expiry(0)
    try:
        username=request.session['user']
        item=ordereditem.objects.filter(username=username)
        ctx={'user':username,'items':item}
        return render(request,'ordered.html',ctx)
    except:
        return redirect('login')
def cart(request):
    request.session.set_expiry(0)
    try:
        username=request.session['user']
        ctx={'user':username}
        return render(request,'cart.html',ctx)
    except:
        return redirect('login')
@csrf_exempt
def order(request):
    request.session.set_expiry(0)
    username=request.session['user']
    if request.method == 'POST' and username!="AnonymousUser":
        try:
            data = json.loads(request.body)
            detail=dict(data)
            tot=int(detail['total'])
            add=detail['msg']
            books=detail['orders']
            #print(books)
            mybook=[]
            qty=[]
            price=[]
            for i in range(len(books)):
                mybook.append(books[i][0])
                qty.append(int(books[i][1]))
                price.append(int(books[i][3]))
            for a,b,c in zip(mybook,qty,price):

                item=ordereditem(username=username,book_names=a,qty=b,price=c,totalprice=tot,address=add)
                item.save()
            
            # print(mybook,qty,price)

            return JsonResponse({'message': 'Data saved successfully'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return redirect('login')
        #return JsonResponse({'error': 'Invalid request method'}, status=400)
