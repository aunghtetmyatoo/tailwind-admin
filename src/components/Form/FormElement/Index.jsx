import React from "react";
import InputField from "./InputField";
import ToggleSwitch from "./ToggleSwitch";
import DateTime from "./DateTime";
import FileUpload from "./FileUpload";
import TextAreaField from "./TextAreaField";
import Checkbox from "./Checkbox";
import SelectInput from "./SelectInput";

const FormElement = () => {
  return (
    <main>
      <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 class="text-title-md2 font-bold text-black dark:text-white">
            Form Elements
          </h2>

          <nav>
            <ol class="flex items-center gap-2">
              <li>
                <a class="font-medium" href="index.html">
                  Dashboard /
                </a>
              </li>
              <li class="font-medium text-primary">Form Elements</li>
            </ol>
          </nav>
        </div>

        <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
          <div class="flex flex-col gap-9">
            <InputField />

            <ToggleSwitch />

            <DateTime />

            <FileUpload />
          </div>

          <div class="flex flex-col gap-9">
            <TextAreaField />

            <Checkbox />

            <SelectInput />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FormElement;
