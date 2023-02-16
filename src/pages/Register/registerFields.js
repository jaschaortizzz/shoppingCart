import Input from '../../components/Input'
import Radio from '../../components/Radio'
import CheckBox from '../../components/CheckBox'

export const registerFields = [
    {
        component:Input,
        name:'name',
        id:"name",
        'data-value': "",
        autoComplete:"name",
        label: 'Name',
        placeholder:"Name",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    },
    {
        component:Radio,
        label: 'Gender',
        name: 'gender',
        'data-value': '',
        options: [
            {
                id:'male',
                text: 'Male',
            },
            {
                id:'female',
                text: 'Female',
            },
            {
                id:'others',
                text: 'Others',
            }
        ]

    },
    {
        component:CheckBox,
        label: 'Hobbies',
        name: 'hobbies',
        'data-value': [],
        options: [
            {
                id:'basketball',
                text: 'Basketball',
            },
            {
                id:'football',
                text: 'Football',
            },
            {
                id:'swimming',
                text: 'Swimming',
            },
            {
                id:'movies',
                text: 'Movies',
            },
            {
                id:'skateboard',
                text: 'Skateboarding',
            }
        ]

    },
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
    },
    {
        component:Input,
        name:'confirmPassword',
        id:"confirm-password",
        'data-value': "",
        type:"password",
        autoComplete:"new-password",
        label: 'Confirm Password',
        placeholder:"*****",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    },
];

export const registerInitialValues = registerFields.reduce
    ((p,c) => ({...p, [c.name]: c['data-value']}),
    {},
);

