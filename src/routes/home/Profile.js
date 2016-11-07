import React from "react";
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

const Profile = (props) => {
    if (props.data.loading) return <span />
    return (
        <img src={props.data.me.Profile.picture} alt="Imagen" />
    )
}

const myQuery = gql`
    query{
        me{
            Profile{
                picture
            }
        }
    }
`;




export default graphql(myQuery)(Profile);