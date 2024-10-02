import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user_daily')
export class UserDaily {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @Column({ default: 0 })
  step_count: number;

  @Column({ type: 'float', default: 0 })
  weight: number;

  @Column({ type: 'datetime' })
  sleep_start_time: Date;

  @Column({ type: 'datetime' })
  sleep_end_time: Date;

  @Column({ default: 0 })
  water_cups: number;

  @Column({ default: 0 })
  drink_ml: number;

  @Column({ default: 0 })
  code_lines: number;

  @Column({ default: 0 })
  snack_calories: number;

  @Column({ default: 0 })
  video_game_time: number;

  @Column({ default: 0 })
  exercise_calories: number;

  @Column({ default: 0 })
  music_time: number;

  @CreateDateColumn({
    type: 'datetime',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'datetime',
    precision: 6,
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at: Date;
}
