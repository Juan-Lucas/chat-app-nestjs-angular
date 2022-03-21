import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { UsersEntity } from "src/users/users.entity";

@Entity('messages')
export class MessagesEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => UsersEntity, (user) => user.messages)
    user: UsersEntity;
    
    @Column()
    userId: number;

    @Column()
    message: string;
}