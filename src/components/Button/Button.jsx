import React from 'react';
import { Button} from 'antd';

const Button = ({children}) => {
    return (
<Button className={s.my_btn}>
    {children}
    </Button>
    );
};

export default Button;