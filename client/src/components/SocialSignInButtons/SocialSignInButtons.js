import { View, Text, Button } from 'react-native';
import React from 'react';

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn("FACEBOOK")
      };
      const onSignInGoogle = () => {
        console.warn("GOOGLE")
      };
    return (
        <>
            <Button
                text="Sign In with Facebook"
                onPress={onSignInFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <Button
                text="Sign In with Google"
                onPress={onSignInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
        </>
    )
}

export default SocialSignInButtons;