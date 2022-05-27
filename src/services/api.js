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
          value: ''
        },
        {
          id: 2,
          title: 'Select',
          type: '',
          component: Select,
          value: ''
        },
        {
          id: 3,
          title: 'Textarea',
          type: '',
          component: Textarea,
          value: ''
        }
      ]
    },
    { 
      title: 'Formulário', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/c@adorable.io.png'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/285/b@adorable.io.png'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/c@adorable.io.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}