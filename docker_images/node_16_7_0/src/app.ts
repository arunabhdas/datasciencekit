import express, {Request, Response} from 'express';
import 'dotenv/config';

const app = express();

const port = 3000;

function main() {
    console.log("Docker is running");
}

main();

app.listen(port, () => {
    console.log("App is running");
});