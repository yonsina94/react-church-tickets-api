import { TokenCard } from '../../token-card/entities/token-card.entity';
import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tokens')
export class Token extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    public id: string;

    @Column('uuid', { name: 'token_card_id', nullable: false })
    public tokenCardId: string;

    @Column('varchar', { name: 'token_code', nullable: false, unique: true })
    public tokenCode: string;

    @Column('boolean', { name: 'is_sold', default: false, nullable: false })
    public isSold: boolean;

    @Column('boolean', { name: 'is_reserved', default: false, nullable: false })
    public isReserved: boolean;

    @JoinColumn({ name: 'token_card_id' })
    @ManyToOne(() => TokenCard, (tc) => tc.tokens)
    public tokenCard: TokenCard;
}
