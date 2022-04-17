import PropTypes from "prop-types"
import { useEffect } from "react";

import { Route, Navigate } from "react-router-dom"

export default function ProtectedRout({ user, children, ...rest }) {

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

ProtectedRout.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired
}