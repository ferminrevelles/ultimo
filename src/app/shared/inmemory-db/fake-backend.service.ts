import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user.model';

export class FakeBackendService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      {
        id: 1,
        username: 'carloscg',
        name: 'Carlos',
        surname: 'Caballero',
        //Tue Apr 07 2020 00:00:00 GMT+0200 (hora de verano de Europa central)
        //birthdate: '19/11/1984',
        birthdate: new  Date('Sun Nov 18 1984 00:00:00 GMT+0100 (hora estándar de Europa central)'),
        phone: '644039911',
        phone2: '690940321',
        email: 'carlos.caballero@gmail.com',
        password: '1234',
        roles: ['student'],
        documentType: { uid: 1, name: 'NIF' },
        documentNumber: '26808956H',
        license: 'B1',
        aboutMe: 'LOREM IPSUM',
        otherCompetences: 'LOREM IPSUM',
        address: {
          street: 'Urbanización las Areanas - 45',
          province: { uid: 4, name: 'Cádiz' },
          municipe: { uid: 6, name: 'Chiclana de la Frontera' }
        },
        avatar_hash: 'assets/img/perfil.png',
        studies: [
          {
            uid: 1,
            level: { uid: 1, name: 'Ciclo Formativo' },
            category: { uid: 2, name: 'Informática y comunicaciones' },
            institution: {
              uid: 2,
              name: 'IES Politécnico Jesús Marin'
            },
            title: {
              uid: 2,
              name: 'Administración de Sistemas Informáticos y Redes'
            },
            grade: {
              uid: 3,
              name: 'Ciclo Formativo de Grado Superior'
            },
            //Tue Apr 07 2020 00:00:00 GMT+0200 (hora de verano de Europa central)
            //date: '30/06/2005',
            date: new Date('Thu Jun 30 2005 00:00:00 GMT+0200 (hora de verano de Europa central)'),           
            dual: false,
            bilingue: true,
            certificate: true
          },
          {
            uid: 2,
            institution: {
              uid: 2,
              name: 'IES Politécnico Jesús Marin'
            },
            category: { uid: 2, name: 'Informática y Comunicaciones' },
            level: { uid: 1, name: 'Ciclo Formativo' },
            title: {
              uid: 1,
              name: 'Desarrollo Aplicaciones Web'
            },
            grade: { uid: 3, name: 'Ciclo Formativo de Grado Superior' },
            //date: '30/06/2007',
            date: new Date('Sat Jun 30 2007 00:00:00 GMT+0200 (hora de verano de Europa central)'),  
            dual: true,
            bilingue: false,
            certificate: false
          }
        ],
      //  experiencies: [],  He anulado esta declaración en el backend y he usado la que viene debajo.
        languages: [
          {
            uid: 1,
            level: { uid: 5, name: 'C1' },
            name: { uid: 1, name: 'Inglés' },
            //date: '30/06/2005'
            date: new Date('Thu Jun 30 2005 00:00:00 GMT+0200 (hora de verano de Europa central)'),  
          },
          {
            uid: 2,
            level: { uid: 4, name: 'B2' },
            name: { uid: 2, name: 'Francés' },
            //date: '30/06/1998'
            date: new Date('Thu Jun 30 1998 00:00:00 GMT+0200 (hora de verano de Europa central)'),  
          }
        ],
        offers: [],
        experiencies: [
          {
            uid: 1,
            empresa: 'Suma',
            //date_incio: '20/02/2012',
            date_incio: new Date('Mon Feb 20 2012 00:00:00 GMT+0200 (hora de verano de Europa central)'),  
            //date_fin: '02/10/2016',
            date_fin: new Date('Wen Nov 02 2016 00:00:00 GMT+0200 (hora de verano de Europa central)'),
            puesto: 'Junior',
            tareas: 'Desarrollador front-end'
          },
          {
            uid: 2,
            empresa: 'Indra',
            //date_incio: '06/01/2017',
            date_incio: new Date('Fri Jan 06 2017 00:00:00 GMT+0200 (hora de verano de Europa central)'), 
            //date_fin: '20/09/2019',
            date_fin: new Date('Fri Sep 20 2019 00:00:00 GMT+0200 (hora de verano de Europa central)'),
            puesto: 'Ingeniero',
            tareas: 'Desarrollador back-end'
          }
        ],/*
        languages: [
          { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
          {
            id: 0,
            lid: 1,
            idioma: 'Portugués',
            nivel: 'A2',
            date: '30/06/2013'
          }
        ]
     */
      }
    ];

    const offers: any[] = [
      {
        id: 1,
        company: {
          uid: 33,
          name: 'Coritel'
        },
        job: {
          name: 'Programador Jr Java',
          description: 'Programación y prueba unitaria en Java'
        },
        province: { uid: 1, name: 'Málaga' },
        municipe: { uid: 7, name: 'Estepona' },
        //date: '21/09/2006',
        date: new Date('Thu Sep 21 2006 00:00:00 GMT+0200 (hora de verano de Europa central)'),
        category: { uid: 2, name: 'Informática y Comunicaciones' },
        title: [
          { uid: 1, name: 'Desarrollo Aplicaciones Web' },
          { uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }
        ]
      },
      {
        id: 2,
        company: {
          uid: 33,
          name: 'Coritel'
        },
        job: {
          name: 'Comercial',
          description:
            'Relaciones con los clientes y atención a las redes sociales.'
        },
        province: { uid: 1, name: 'Málaga' },
        municipe: { uid: 8, name: 'Campanillas (PTA)' },
        //date: '21/09/2016',
        date: new Date('Wed Sep 21 2006 00:00:00 GMT+0200 (hora de verano de Europa central)'),
        category: { uid: 4, name: 'Comercio y Marketing' },
        title: [{ uid: 5, name: 'Gestión Comercial y Empresarial' }]
      },
      {
        id: 3,
        company: {
          uid: 33,
          name: 'Coritel'
        },
        job: {
          name: 'Analista Programador Java',
          description:
            'Análisis funcional y diseño técnico/detallado de componentes'
        },
        province: { uid: 5, name: 'Granada' },
        municipe: { uid: 9, name: 'Motril' },
        //date: '11/07/2016',
        date: new Date('Mon Jul 11 2016 00:00:00 GMT+0200 (hora de verano de Europa central)'),
        category: { uid: 2, name: 'Informática y Comunicaciones' },
        title: [{ uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }]
      },
      {
        id: 4,
        company: {
          uid: 35,
          name: 'Indra'
        },
        job: {
          name: 'Administrativo',
          description: 'Gestión de cartera de clientes.'
        },
        province: { uid: 2, name: 'Sevilla' },
        municipe: { uid: 10, name: 'Osuna' },
        //date: '01/12/2015',
        date: new Date('Thu Dec 01 2015 00:00:00 GMT+0200 (hora de verano de Europa central)'),
        category: { uid: 5, name: 'Administración y Gestión' },
        title: [{ uid: 6, name: 'Empresariales' }]
      }
    ];
    return { users, offers };
  }
}
