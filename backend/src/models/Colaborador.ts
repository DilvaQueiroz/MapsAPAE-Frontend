import {Entity, Column, PrimaryGeneratedColumn, OneToMany , JoinColumn} from 'typeorm';
import Image from './ImageUsuario';

@Entity('usuarios')
export default class Colaborador{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    name:string;

    @Column()
    latitude:number;

    @Column()
    longitude:number;

    @Column()
    cep:string;
    
    @Column()
    street: string;

    @Column()
    number:string;

    @Column()
    district:string;

    @Column()
    about:string;

    @Column()
    instructions:string;

    @Column()
    opening_hours:string;

    @Column()
    open_on_weekends:boolean;

    @OneToMany(()=> Image, image => image.usuario, {
        cascade:['insert','update']
    })
    @JoinColumn({name: 'colaborador_id'})
    images: Image[];
}