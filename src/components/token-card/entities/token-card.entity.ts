import { Token } from '../../token/entities/token.entity';
import {
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';

@Entity('tokens-cards')
export class TokenCard extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;

    @Column('varchar', { name: 'token_name', length: 120, nullable: false })
    public tokenName: string;

    @Column('varchar', { name: 'token_description', length: 256 })
    public tokenDescription: string;

    @Unique('token_main_code_unique', ['token_main_code'])
    @Column('varchar', { name: 'token_main_code', length: 15, nullable: false })
    public tokenMainCode: string;

    @Column('int', { name: 'amount', nullable: false, default: 0 })
    public amount: number;

    @OneToMany(() => Token, (t) => t.tokenCard)
    public tokens: Array<Token>;
}
