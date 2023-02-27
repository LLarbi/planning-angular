export class Codeww {
  emoji: string;
  description: string;
  constructor(codeww: number) {
    switch (codeww){
      case 0:
        this.emoji = '☀️';
        this.description = 'Ciel dégagé';
        break;
      case 1:
      case 2:
      case 3:
        this.emoji = '🌤️';
        this.description = 'Partiellement nuageux';
        break;
      case 45:
      case 48:
        this.emoji = '🌫️';
        this.description = 'Brouillard';
        break;
      case 51:
        this.emoji = '🌧️';
        this.description = 'Pluie légère';
        break;
      case 53:
        this.emoji = '🌧️';
        this.description = 'Pluie modérée';
        break;
      case 55:
        this.emoji = '🌧️';
        this.description = 'Pluie forte';
        break;
      case 56:
        this.emoji = '❄️';
        this.description = 'Pluie verglaçante légère';
        break;
      case 57:
        this.emoji = '❄️';
        this.description = 'Pluie verglaçante forte';
        break;
      case 61:
        this.emoji = '🌧️';
        this.description = 'Pluie légère';
        break;
      case 63:
        this.emoji = '🌧️';
        this.description = 'Pluie modérée';
        break;
      case 65:
        this.emoji = '🌧️';
        this.description = 'Pluie forte';
        break;
      case 66:
        this.emoji = '❄️';
        this.description = 'Pluie verglaçante légère';
        break;
      case 67:
        this.emoji = '❄️';
        this.description = 'Pluie verglaçante forte';
        break;
      case 71:
        this.emoji = '🌨️';
        this.description = 'Neige légère';
        break;
      case 73:
        this.emoji = '🌨️';
        this.description = 'Neige modérée';
        break;
      case 75:
        this.emoji = '🌨️';
        this.description = 'Neige forte';
        break;
      case 77:
        this.emoji = '❄️';
        this.description = 'Grains de neige';
        break;
      case 80:
        this.emoji = '🌧️';
        this.description = 'Averses de pluie légères';
        break;
      case 81:
        this.emoji = '🌧️';
        this.description = 'Averses de pluie modérées';
        break;
      case 82:
        this.emoji = '🌧️';
        this.description = 'Averses de pluie violentes';
        break;
      case 85:
        this.emoji = '🌨️';
        this.description = 'Averses de neige légères';
        break;
      case 86:
        this.emoji = '🌨️';
        this.description = 'Averses de neige fortes';
        break;
      case 95:
        this.emoji = '🌩️';
        this.description = 'Orage léger/modéré';
        break;
      case 96:
        this.emoji = '⛈️';
        this.description = 'Orage léger avec grêle';
        break;
      case 99:
        this.emoji = '⛈️';
        this.description = 'Orage fort avec grêle';
        break;
      default:
        this.emoji = '❓';
        this.description= 'Code inconnu';
        break;
    }
  }
}
