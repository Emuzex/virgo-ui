<script lang="ts" setup>
import api from '@virgo-ui/vue/component-meta/base-input.json';
</script>

# Base Input

Stay tuned...

## Label

Label via prop & slot

<div class="grid grid-cols-2 gap-x-6">
    <div>
        <base-input label="Label">
            <template #default="props">
                <input type="text" v-bind="props" />
            </template>
        </base-input>
    </div>
    <div>
        <base-input id="form-x">
            <template #label>
                <label for="a-input-form-x">
                    <span>Awesome </span>
                    <span class="text-red">*</span>
                </label>
            </template>
            <template #default="props">
                <input type="text" v-bind="props" />
            </template>
        </base-input>
    </div>
</div>

## Placeholder

placeholder

<div class="grid grid-cols-2">
    <div>
        <base-input placeholder="Enter your email">
            <template #default="props">
                <input type="text" v-bind="props" />
            </template>
        </base-input>
    </div>
</div>


## Outer Slots

Default slot

<base-input>
<template #default="props">
<input type="text" v-bind="props" />
</template>
</base-input>

Prepend slot

<base-input>
<template #prepend>
<i class="i-bx-info-circle"></i>
</template>
<template #default="props">
<input type="text" v-bind="props" />
</template>
</base-input>

Append slot

<base-input>
<template #default="props">
<input type="text" v-bind="props" />
</template>
<template #append>
<i class="i-bx-info-circle"></i>
</template>
</base-input>

Prepend & Append slot

<base-input>
<template #prepend>
<i class="i-bx-info-circle"></i>
</template>
<template #default="props">
<input type="text" v-bind="props" />
</template>
<template #append>
<i class="i-bx-info-circle"></i>
</template>
</base-input>


## Inner slots

Prepend inner slot

<base-input>
<template #prepend-inner>
<i class="i-bx-dollar"></i>
</template>
<template #default="props">
<input type="text" v-bind="props" />
</template>
</base-input>

Append inner slot

<base-input>
<template #default="props">
<input type="text" v-bind="props" />
</template>
<template #append-inner>
<i class="i-bx-dollar"></i>
</template>
</base-input>

Prepend & Append inner slot

<base-input>
<template #prepend-inner>
<i class="i-bx-dollar"></i>
</template>
<template #default="props">
<input type="text" v-bind="props" />
</template>
<template #append-inner>
<i class="i-bx-dollar"></i>
</template>
</base-input>

## Hint, Error & Bottom slot

Hint

<base-input hint="We never share your email with anyone">
<template #prepend-inner>
<i class="i-bx-at"></i>
</template>
<template #default="props">
<input type="text" v-bind="props" />
</template>
</base-input>

Bottom slot


<base-input>
<template #default="props">
<input type="text" v-bind="props" />
</template>
<template #bottom>
<small class="inline-block w-full text-right">right aligned text</small>
</template>
</base-input>

Error

<base-input error="This field is required">
<template #prepend-inner>
<i class="i-bx-at"></i>
</template>
<template #default="props">
<input type="text" v-bind="props" />
</template>
</base-input>

## Input Types

Text

<base-input>
<template #default="props">
<input type="text" v-bind="props" />
</template>
</base-input>

Password

<base-input>
<template #default="props">
<input type="password" v-bind="props" />
</template>
</base-input>

Search

<base-input>
<template #default="props">
<input type="search" v-bind="props" />
</template>
</base-input>

url

<base-input>
<template #default="props">
<input type="url" v-bind="props" />
</template>
</base-input>

number

<base-input>
<template #default="props">
<input type="number" v-bind="props" />
</template>
</base-input>

Date

<base-input>
<template #default="props">
<input type="date" v-bind="props" />
</template>
</base-input>

time

<base-input>
<template #default="props">
<input type="time" v-bind="props" />
</template>
</base-input>

file

<base-input class="px-0" input-wrapper-classes="!px-0">
<template #default="props">
<input type="file" v-bind="props" class="file:rounded-lg file:border-none file:mr-4 file:px-4 file:py-3 file:text-gray-500 file:rounded-r-none file:bg-gray-100" />
</template>
</base-input>
