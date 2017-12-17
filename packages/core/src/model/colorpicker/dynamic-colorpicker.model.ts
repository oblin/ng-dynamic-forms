import { DynamicFormValueControlModelConfig, DynamicFormValueControlModel } from "../dynamic-form-value-control.model";
import { DynamicFormControlLayout } from "../dynamic-form-control-layout.model";
import { serializable } from "../../decorator/serializable.decorator";

export const DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER = "COLORPICKER";

export interface DynamicColorPickerModelConfig extends DynamicFormValueControlModelConfig<string | object> {

    format?: string;
    inline?: boolean;
}

export class DynamicColorPickerModel extends DynamicFormValueControlModel<string | object> {

    @serializable() format: string | null;
    @serializable() inline: boolean;

    @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_COLORPICKER;

    constructor(config: DynamicColorPickerModelConfig, layout?: DynamicFormControlLayout) {

        super(config, layout);

        this.format = typeof config.format === "string" ? config.format : null;
        this.inline = typeof config.inline === "boolean" ? config.inline : false;
    }
}