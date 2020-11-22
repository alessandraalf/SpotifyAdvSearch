from django.db import models


# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)
    search_counter = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Playlist(models.Model):
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    code = models.TextField()
    
    def __str__(self):
        return f"{self.genre}_{self.code}"

    def get_url(self):
        return f"https://open.spotify.com/embed/playlist/{self.code}"
