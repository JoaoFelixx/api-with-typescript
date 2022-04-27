import { application } from './app';

const PORT = process.env.PORT || 7878;

application.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));