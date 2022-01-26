import dotenv from 'dotenv';
import app from './app';
dotenv.config();
function main() {
    console.log('Server port settings : ', app.get('port'));
    app.listen(app.get('port'));
    console.log('Server running at port : ', app.get('port'));
}
main();