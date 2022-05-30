import Input from "../components/Form/Input";
import Select from "../components/Form/Select";
import Textarea from "../components/Form/Textarea";

export function loadLists() {
  return [
    { 
      title: 'Perguntas', 
      creatable: true,
      cards: [
        {
          id: 1,
          title: 'Input',
          type: '',
          component: Input,
          value: '',
          name: '',
        },
        {
          id: 2,
          title: 'Select',
          type: '',
          component: Select,
          value: '',
          name: '',
        },
        {
          id: 3,
          title: 'Textarea',
          type: '',
          component: Textarea,
          value: '',
          name: '',
        },
        {
          id: 4,
          title: 'Checkbox',
          type: 'checkbox',
          component: Input,
          value: '',
          name: '',
        },
        {
          id: 5,
          title: 'Radio',
          type: 'radio',
          component: Input,
          value: '',
          name: 'radio',
        },
        {
          id: 6,
          title: 'Date',
          type: 'date',
          component: Input,
          value: '',
          name: '',
        }
      ]
    },
    { 
      title: 'Formulário', 
      creatable: false,
      cards: [
        {
          id: 0,
          title: '',
          type: '',
          component: null,
          value: '',
          name: '',
        }
      ]
    }
  ];
}