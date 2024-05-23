import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  // Método para obtener todas las canciones
  getSongs() {
    return this.http.get('https://api.spotify.com/v1/me/tracks');
  }

  // Método para obtener una canción por su ID
  getSongById(id: string) {
    return this.http.get(`https://api.spotify.com/v1/tracks/${id}`);
  }
}
