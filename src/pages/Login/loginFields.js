import Input from '../../components/Input'

export const loginFields = [
    {
        component:Input,
        name:'email',
        id:"email-adress",
        type:"email",
        'data-value': "",
        autoComplete:"email",
        label: 'Email',
        placeholder:"Email",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    },
    {
        component:Input,
        name:'password',
        id:"password",
        'data-value': "",
        type:"password",
        autoComplete:"password",
        label: 'Password',
        placeholder:"*****",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    }
];

export const loginInitialValues = loginFields.reduce
    ((p,c) => ({...p, [c.name]: c['data-value']}),
    {},
);

