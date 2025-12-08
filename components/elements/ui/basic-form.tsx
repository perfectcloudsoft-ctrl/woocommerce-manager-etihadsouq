'use client';

import { Button } from '@/components/ui/button';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'
import { InputGroupType } from '@/types/input-group-type'
import { RiEyeCloseLine, RiEyeLine, RiLoader4Line } from '@remixicon/react';
import { FormEvent, useState } from 'react';

const BasicForm = ({
    fieldsData,
    onSubmit,
    submitButtoneText,
}: {
    fieldsData: InputGroupType[],
    submitButtoneText: {
        normal: string,
        inprogress: string,
    }
    onSubmit: (event: FormEvent) => void | Promise<void>,
}) => {

    const [inProgress, setInProgress] = useState<boolean>(false);

    return (
        <form
            className='min-w-[350px] space-y-5'
            onSubmit={async (event) => {
                setInProgress(true);
                await onSubmit(event);
                setInProgress(false);
            }}
        >
            {fieldsData.map((field, index) => (
                <SingleInputField
                    key={index}
                    field={field}
                />
            ))}

            <Button
                variant={"theme"}
            >
                {
                    inProgress && (
                        <RiLoader4Line
                            size={20}
                            className='animate-spin'
                        />
                    )
                }
                <p>{inProgress ? submitButtoneText.inprogress : submitButtoneText.normal}</p>
            </Button>

        </form>
    )
}

function SingleInputField({ field }: {
    field: InputGroupType,
}) {

    const [fieldType, setFieldType] = useState(field.type)

    return (
        <div
            className='space-y-2'
        >
            {field.label && (
                <Label
                    htmlFor={field.name}
                >{field.label}</Label>
            )}
            <InputGroup>
                <InputGroupInput
                    placeholder={field.placeholder}
                    name={field.name}
                    id={field.name}
                    aria-invalid={field.invalid}
                    type={fieldType}
                    className='autofill:bg-background autofill:text-foreground'
                />
                {field.icon && (
                    <InputGroupAddon>
                        <field.icon
                            size={20}
                        />
                    </InputGroupAddon>
                )}

                {field.isPassword && (
                    <InputGroupAddon
                        align={"inline-end"}
                    >
                        <button
                            className='pr-2 cursor-pointer'
                            type='button'
                            onClick={() => setFieldType(prev => prev === "password" ? "text" : "password")}
                        >
                            {
                                fieldType === "password" ? (
                                    <RiEyeCloseLine
                                        size={18}
                                    />
                                ) : (
                                    <RiEyeLine
                                        size={18}
                                    />
                                )
                            }
                        </button>
                    </InputGroupAddon>
                )}

            </InputGroup>
        </div>
    )
}

export default BasicForm