import {Link} from "react-router-dom";
import React from "react";

const NotFoundPage = ()=> (
    <div>
        404 - <Link to={"/"}> go Home </Link>
    </div>
);

export default NotFoundPage;