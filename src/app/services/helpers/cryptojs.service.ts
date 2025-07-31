import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environments/environment';
import { tJson } from '../../models/types/TJson.type';
import { IPokemon } from '../../models/interfaces/IPokeApi.interface';

/**
 * Servicio para encryptar información usando el Advanced Encryption Standard
 */
@Injectable({
  providedIn: 'root'
})
export class CryptojsService {
  encrypt(data: tJson | IPokemon[]): string {
    const stringData = JSON.stringify(data);
    return CryptoJS.AES.encrypt(stringData, environment.cryptoSecretKey).toString();
  }

  decrypt(encryptedText: string): tJson | IPokemon[] {
    const bytes = CryptoJS.AES.decrypt(encryptedText, environment.cryptoSecretKey);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(decrypted);
  }
}
