import { Injectable } from '@angular/core';
import { Guest } from '../models/guest.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private _id = 0;
  private _guests: Guest[] = []
  private $_guests = new BehaviorSubject<Guest[]>(this._guests)

  public get $guests() { return this.$_guests.asObservable() }

  public add(guest: Guest) {
    if (this.existWithInfo(guest)) throw new Error(`La personne existe déjà`)
    guest.id = `${++this._id}`
    this._guests.push(guest)
    this.$_guests.next(this._guests)
  }

  public edit(guest: Guest) {
    const guestIndex = this._guests.findIndex(g => g.id === guest.id)
    if (guestIndex === -1) throw new Error(`La personne n'existe pas`)
    if (this.existWithInfo(guest)) throw new Error(`La personne existe déjà`)
    this._guests[guestIndex] = guest
    this.$_guests.next(this._guests)
  }

  public delete(guest: Guest) {
    const guestIndex = this._guests.findIndex(g => g.id === guest.id)
    if (guestIndex === -1) throw new Error(`La personne n'existe pas`)
    this._guests.splice(guestIndex, 1)
    this.$_guests.next(this._guests)
  }

  private existWithInfo(guest: Guest): boolean {
    return this._guests
      .filter(g => g.id !== guest.id)
      .some(g => g.firstName === guest.firstName && g.lastName === guest.lastName)
  }

  public resetList() {
    this._guests = [];
    this.$_guests.next(this._guests)
  }
}
