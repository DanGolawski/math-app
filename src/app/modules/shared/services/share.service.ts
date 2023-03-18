import { Injectable } from '@angular/core';
import { Subchapter } from 'src/app/models/book';

@Injectable()
export class ShareService {

  private videoSrc: string;
  private subchapter: Subchapter;

  public setVideoSrc(value: string): void {    
    this.videoSrc = value;
  }

  public getVideoSrc(): string {
    return this.videoSrc;
  }

  public setSubchapter(subchapter: Subchapter): void {
    this.subchapter = subchapter;
  }

  public getSubchapter(): Subchapter {
    return this.subchapter;
  }
}
