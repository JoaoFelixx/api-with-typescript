export interface AddressInterface {
  email: string;
  name: string
} 

export interface MessageInterface {
  to: AddressInterface;
  from: AddressInterface;
  subject:string;
  body: string;
} 

export interface SendEmailInterface {
  sendEmail(message: MessageInterface ): Promise<void>
}