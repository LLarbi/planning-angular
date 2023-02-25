import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.css']
})
export class AvatarSelectComponent implements OnInit{
  randomNumbers: number[] = [];

  @Output() select = new EventEmitter<string>();
  selectedAvatar!: string;

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.randomNumbers.push(Math.random());
    }
  }

  onSelect() {
    this.select.emit(this.selectedAvatar);
  }
}
