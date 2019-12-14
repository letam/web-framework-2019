from django.http import JsonResponse, HttpResponse, HttpResponseBadRequest
from django.views.decorators.http import require_http_methods
import json

from .models import Counter


@require_http_methods(["GET", "POST", "DELETE"])
def api(request):
    counter = Counter.objects.first()
    if not counter:
        counter = Counter(count=0)

    if request.method == "POST":
        if request.content_type != "application/json":
            return HttpResponseBadRequest("Content type must be 'application/json'")
        elif request.body.decode() == "{}":
            return HttpResponseBadRequest("Request body is required")
        data = json.loads(request.body)
        counter.count = data["count"]
        counter.save()
    elif request.method == "DELETE":
        if counter.pk is not None:
            counter.count = 0
            counter.save()
        return HttpResponse(status=204)

    return JsonResponse({"count": counter.count})
