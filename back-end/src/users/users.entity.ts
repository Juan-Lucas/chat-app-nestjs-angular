import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { MessagesEntity } from "src/messages/messages.entity";

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    name: string

    @OneToMany(() => MessagesEntity, (msg) => msg.sendId)
    messages: MessagesEntity[];
}