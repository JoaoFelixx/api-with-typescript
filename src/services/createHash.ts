import { createHmac } from 'crypto';
import SECRET_KEY from '../auth/SECRET_KEY'

export default async password => {
   return await createHmac('md5', SECRET_KEY)
    .update(password).digest('hex')
} 