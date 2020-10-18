import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {

    @IsNotEmpty()
    @IsOptional()
    id?: string;

    @IsString()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsNotEmpty({message: 'Este campo não pode estar vazio'})
    @IsOptional()
    email?: string;
}