import type{Vehicle,Driver,Shipment}from'./types';
export const vehicles:Vehicle[]=[
{id:'VH-1042',name:'Mercedes Sprinter',plate:'TS 09 AB 4821',type:'Van',status:'In transit',driver:'Maya Patel',location:'Hitech City, Hyderabad',fuel:78,odometer:28450,maintenance:'Oct 22, 2026'},
{id:'VH-1043',name:'Tata Ace Gold',plate:'TS 08 CD 1936',type:'Mini truck',status:'Available',driver:'Unassigned',location:'Secunderabad Hub',fuel:91,odometer:18220,maintenance:'Nov 02, 2026'},
{id:'VH-1044',name:'Ashok Leyland Dost',plate:'TS 07 EF 7251',type:'Light truck',status:'Maintenance',driver:'Unassigned',location:'Workshop · Madhapur',fuel:32,odometer:52190,maintenance:'Oct 13, 2026'},
{id:'VH-1045',name:'Mahindra Bolero Pickup',plate:'TS 10 GH 6024',type:'Pickup',status:'In transit',driver:'Arjun Reddy',location:'Gachibowli, Hyderabad',fuel:64,odometer:33910,maintenance:'Oct 28, 2026'},
{id:'VH-1046',name:'Eicher Pro 2049',plate:'TS 11 JK 8410',type:'Heavy truck',status:'Delayed',driver:'Rohan Das',location:'NH 65 · Patancheru',fuel:46,odometer:64880,maintenance:'Oct 18, 2026'},
{id:'VH-1047',name:'Tata Intra V30',plate:'TS 09 LM 3118',type:'Pickup',status:'Available',driver:'Unassigned',location:'Kukatpally Hub',fuel:88,odometer:14700,maintenance:'Nov 10, 2026'}];
export const drivers:Driver[]=[
{id:'DR-201',name:'Maya Patel',initials:'MP',phone:'+91 98765 43210',license:'TS09 2019004521',status:'On duty',vehicle:'VH-1042',deliveries:248,rating:4.9,location:'Hitech City, Hyderabad'},
{id:'DR-202',name:'Arjun Reddy',initials:'AR',phone:'+91 98480 22104',license:'TS08 2021007742',status:'On duty',vehicle:'VH-1045',deliveries:193,rating:4.8,location:'Gachibowli, Hyderabad'},
{id:'DR-203',name:'Rohan Das',initials:'RD',phone:'+91 99887 33102',license:'TS11 2018009183',status:'On duty',vehicle:'VH-1046',deliveries:316,rating:4.6,location:'Patancheru, Hyderabad'},
{id:'DR-204',name:'Priya Sharma',initials:'PS',phone:'+91 97000 88214',license:'TS09 2022001388',status:'Available',vehicle:'Unassigned',deliveries:156,rating:4.9,location:'Secunderabad Hub'},
{id:'DR-205',name:'Kiran Kumar',initials:'KK',phone:'+91 91234 56789',license:'TS07 2020006280',status:'Offline',vehicle:'Unassigned',deliveries:204,rating:4.7,location:'Kondapur'}];
export const shipments:Shipment[]=[
{id:'SHP-28491',customer:'Acme Retail Pvt Ltd',origin:'Secunderabad Hub',destination:'Hitech City, Hyderabad',driver:'Maya Patel',vehicle:'VH-1042',status:'In transit',date:'2026-10-12',eta:'10:45 AM',priority:'Express',progress:68},
{id:'SHP-28490',customer:'FreshMart Stores',origin:'Kukatpally Hub',destination:'Banjara Hills, Hyderabad',driver:'Arjun Reddy',vehicle:'VH-1045',status:'In transit',date:'2026-10-12',eta:'11:20 AM',priority:'Standard',progress:44},
{id:'SHP-28489',customer:'Nova Electronics',origin:'Uppal Warehouse',destination:'Miyapur, Hyderabad',driver:'Rohan Das',vehicle:'VH-1046',status:'Delayed',date:'2026-10-12',eta:'12:30 PM',priority:'Critical',progress:72},
{id:'SHP-28488',customer:'Urban Living Co.',origin:'Madhapur Hub',destination:'Jubilee Hills, Hyderabad',driver:'Priya Sharma',vehicle:'VH-1043',status:'Delivered',date:'2026-10-12',eta:'09:12 AM',priority:'Standard',progress:100},
{id:'SHP-28487',customer:'HealthPlus Pharmacy',origin:'Secunderabad Hub',destination:'Kondapur, Hyderabad',driver:'Kiran Kumar',vehicle:'VH-1047',status:'Pending',date:'2026-10-12',eta:'01:15 PM',priority:'Express',progress:0},
{id:'SHP-28486',customer:'Northstar Supplies',origin:'Patancheru Depot',destination:'Financial District, Hyderabad',driver:'Maya Patel',vehicle:'VH-1042',status:'Delivered',date:'2026-10-11',eta:'Yesterday',priority:'Standard',progress:100},
{id:'SHP-28485',customer:'Pixel Devices',origin:'Uppal Warehouse',destination:'Begumpet, Hyderabad',driver:'Arjun Reddy',vehicle:'VH-1045',status:'Delivered',date:'2026-10-11',eta:'Yesterday',priority:'Express',progress:100}];