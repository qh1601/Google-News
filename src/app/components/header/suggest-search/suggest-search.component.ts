import { Component, OnInit} from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'app-suggest-search',
  templateUrl: './suggest-search.component.html',
  styleUrls: ['./suggest-search.component.css']
})
export class SuggestSearchComponent implements OnInit {
  isShowSuggest: boolean;
// tslint:disable:max-line-length
  options = [
    {
      text: 'Featured topics',
      subitems: [
        {
          name: 'Cricket World Cup',
          img:
            'https://lh3.googleusercontent.com/SywaN0XF98lyINtGyNi9jHbI8qmZzyuxb3Pj2FwSk9zfCsA1XzvP1Bc6CXb2rCohEpeyd3yS=p'
        },
        {
          name: '2019 Women\'s World Cup',
          img:
            'https://lh3.googleusercontent.com/lW9HpPlgsUPS11egVGLTMlr3IG3RidDzz6u1P_vbzZnAxepxumCauJo7hkchx1AxcuKyg7V5=p'
        },
      ]
    },
    {
      text: 'In the news',
      subitems: [
        {
          name: 'New York Mets',
          img:
            'https://lh5.googleusercontent.com/proxy/SKKw9c_ryZ1-GjPfjh-rjCsXUWmWOr3fQ1vAbE1f2T2k1wd95-Jy58JNqZpFAnOkwy-4Xz7XgvbDzj9bNURSmvUsPMBAkHur-LTTdmVdQgFEYxQM3uIONsO9GbG2FdLqccNDqIr7Fg=p'
        },
        {
          name: 'Earthquake',
          img:
            'https://lh6.googleusercontent.com/proxy/8ZENx_NU5D_2D2wHsaesttvuZ97cy8y3A5k6JRdPs2_4T0-dzOf7HKEizF59xc6Ac7jeJ1ewOruFhoMDAPWk7D1SKoFSvgnRYo75VSYgKHC-F4tDz8Fx50VS-Sduxfsav7RaTmUrNLWicW3T1Q4=p'
        },
        {
          name: 'Pete Buttigieg',
          img:
            'https://lh4.googleusercontent.com/proxy/oLJQsJyDpJz0hgmzQfPQztLdPctQlEIcKN5fba-R2Hfk1xjo6nKlj5CR75FEHzLbjI0iKIIlOIzJM4GpbWVi_wb7s77yIsVXLaX5avyf8yEXL3KaWC0LXK_HB8wpyOhmAxIQVgL_dIj6afVgazQ=p'
        },
        {
          name: 'Turkey',
          img:
            'https://lh4.googleusercontent.com/proxy/1E8CD2brLcIO7RH5wKJS9SEzdEvlrvTu24yGHHkzKQnAr-J2e2F7OJoke4LVR2fIBHoQeWHkWCM_F-AKDx5zh8S7Hwl-NTMYlwtTXjEoeLYN7zQHYKq3GQmzNl2b8gaiQVqF7mYqSVsOy472vgU=p'
        },
        {
          name: 'Istanbul',
          img:
            'https://lh3.googleusercontent.com/proxy/Si3jbH49RCD6rHK763Wm9jRDEjYh0fKsJGoKpPFIC8bkUiljsIpQkajvzXeqlHTa0HvglhB3emSPQu2Qtq70Py6tLhf_KLN5fA1jAyBWF-BiUrCY35HMzhgOn3Nny53lTIU0h0t2xHZdufrV-vM=p'
        },
        {
          name: 'Recep Tayyip Erdoğan',
          img:
            'https://lh3.googleusercontent.com/proxy/rnsx8GQeLdJPaiFQ83Das4s0bNhn3UmFpiT83Ms7wndJM0CzKyqJYdKyYOakrHbgdAm0JXelh_idosbzsUydRnb7ZI-1GLWslU-MruMu6Lr8e1JZtHRGdMlHFw4PZ8uSOXSVcaURGffcuj4sJt4=p'
        },
        {
          name: 'Donald Trump',
          img:
            'https://lh5.googleusercontent.com/proxy/2-4ElaJSf5aGJ5sGPUz0popm3PO_NYFYOuWM7cRwEB7ZJ6QEAJ-CbNTqWqGd94pTmhWEbyqK-83yF_BsT9bW94_4rqeBR4verTg16PxUa5x7hvctNaFGYb7dGWUNDJrp-ULXWSwtTXRlfVuQyxE=p'
        },
        {
          name: 'Democratic Party',
          img:
            'https://lh3.googleusercontent.com/kiOqidikHjUkVfIxBrO4eJB9NCRLfX_5xUmCNGH4XgI1x-D_11iX5a_O1WCyHn0MUSwPmHqq=p'
        },
        {
          name: 'Jason Vargas',
          img:
            'https://lh5.googleusercontent.com/proxy/W79JwL7CX3Y4PmoPIXdMFRrVWTG2urnSYazpiQu2z1Wz43lTVLQswYijr0BynyxaacYMKKLZoDMQOMsutHECC5K5setHLdCeUbHx8nU9VJmOI9vIZ5pItLcTwYtIl17lwLy_legi_WCmbIIgC7g=p'
        },
      ]
    }
  ];
  constructor(private statusService: StatusService) {
  }

  ngOnInit() {
    this.statusService.isShowSuggest.subscribe(status => this.isShowSuggest = status);
  }
}
