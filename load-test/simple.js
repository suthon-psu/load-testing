import { check } from "k6";
import http from "k6/http";
//k6 run --vus 10 --duration 30s load-test/simple.js

export default function () {
    let res = http.get("http://localhost:3000");
    check(res, {
        "is status 200": (r) => r.status === 200
    });
};