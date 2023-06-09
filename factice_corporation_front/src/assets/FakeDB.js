import { Employe } from '@/models/Employe';
import { Client } from '@/models/Client';
import { RendezVous } from '@/models/RendezVous';

export const employes = [
  new Employe(1, 'Dupont', 'Jean'),
  new Employe(2, 'Durand', 'Marie'),
  new Employe(3, 'Martin', 'Julie')
];

export const clients = [
  new Client(1, 'Lefevre', 'Pierre'),
  new Client(2, 'Moreau', 'Claire'),
  new Client(3, 'Petit', 'Jacques')
];

export const rdvList = [
  new RendezVous(1, employes[0], clients[0], new Date(2023, 4, 14, 12), '09:00', '10:00'),
  new RendezVous(2, employes[1], clients[1], new Date(2023, 4, 12, 12), '10:00', '11:00'),
  new RendezVous(3, employes[2], clients[2], new Date(2023, 4, 24, 12), '11:00', '12:00'),
  new RendezVous(4, employes[0], clients[1], new Date(2023, 4, 24, 12), '14:00', '15:00'),
  new RendezVous(5, employes[1], clients[2], new Date(2023, 4, 7, 12), '15:00', '16:00'),
  new RendezVous(6, employes[2], clients[0], new Date(2023, 4, 13, 12), '16:00', '17:00')
];