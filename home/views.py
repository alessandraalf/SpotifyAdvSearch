from django.shortcuts import render
from django.http import HttpResponse
from home.models import Genre, Playlist
from django.template import loader

from django.db.models import F


def index(request):
    genres = Genre.objects.all().order_by('-search_counter')
    genres_all = Genre.objects.all().order_by('name')
    template = loader.get_template('home/index.html')
    playlists = Playlist.objects.all().order_by('genre__search_counter')
    gp_list = zip(genres, playlists)
    context = {
        'gp_list': gp_list,
        'g_list': genres_all
    }
    return HttpResponse(template.render(context, request))


def playlist(request, genre_id):
    template = loader.get_template('home/playlist.html')
    playlist_code = Playlist.objects.get(genre_id=genre_id)
    iframe = playlist_code.code
    Genre.objects.filter(id=genre_id).update(search_counter=F('search_counter') + 1)

    context = {
        'iframe': iframe,
    }
    return HttpResponse(template.render(context, request))


def allgenres(request):
    template = loader.get_template('home/allgenres.html')
    genres = Genre.objects.all().order_by('-search_counter')
    playlists = Playlist.objects.all().order_by('genre__search_counter')
    gp_list = zip(genres, playlists)
    context = {
        'gp_list': gp_list,
    }
    return HttpResponse(template.render(context, request))
