import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  privacyAccepted = false;
  privacyTouched = false;
  submitAttempted = false;

  nameValue = '';
  emailValue = '';
  messageValue = '';

  nameTouched = false;
  emailTouched = false;
  messageTouched = false;

  get nameHasError(): boolean {
    return (this.nameTouched || this.submitAttempted) && this.nameValue.trim().length === 0;
  }

  get nameShowStatus(): boolean {
    return this.nameTouched || this.submitAttempted;
  }

  get nameIsValid(): boolean {
    return this.nameTouched && this.nameValue.trim().length > 0;
  }

  get emailHasError(): boolean {
    return (this.emailTouched || this.submitAttempted) && this.emailValue.trim().length === 0;
  }

  get emailShowStatus(): boolean {
    return this.emailTouched || this.submitAttempted;
  }

  get emailIsValid(): boolean {
    return this.emailTouched && this.emailValue.trim().length > 0;
  }

  get messageHasError(): boolean {
    return (this.messageTouched || this.submitAttempted) && this.messageValue.trim().length === 0;
  }

  get messageShowStatus(): boolean {
    return this.messageTouched || this.submitAttempted;
  }

  get messageIsValid(): boolean {
    return this.messageTouched && this.messageValue.trim().length > 0;
  }

  get privacyHasError(): boolean {
    return (this.privacyTouched || this.submitAttempted) && !this.privacyAccepted;
  }

  onPrivacyChange(checked: boolean): void {
    this.privacyAccepted = checked;
    this.privacyTouched = true;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitAttempted = true;
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
