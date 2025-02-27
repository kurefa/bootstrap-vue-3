<template>
  <component :is="bodyTag" class="card-body" :class="classes">
    <b-card-title v-if="!!title || $slots.title" :tag="titleTag">
      <slot name="title">
        {{ title }}
      </slot>
    </b-card-title>

    <b-card-sub-title
      v-if="!!subTitle || !!$slots.subTitle"
      :tag="subTitleTag"
      :text-variant="subTitleTextVariant"
    >
      <slot name="subTitle">
        {{ subTitle }}
      </slot>
    </b-card-sub-title>

    <slot>
      {{ text }}
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {BCardBodyProps} from '../../types/components'
import {computed, toRef} from 'vue'
import BCardTitle from './BCardTitle.vue'
import BCardSubTitle from './BCardSubTitle.vue'
import type {Booleanish, ColorVariant, TextColorVariant} from '../../types'
import {useBooleanish} from '../../composables'

interface BCardBodyProps {
  bodyBgVariant?: ColorVariant
  bodyTag?: string
  bodyTextVariant?: TextColorVariant
  overlay?: Booleanish
  subTitle?: string
  subTitleTag?: string
  subTitleTextVariant?: TextColorVariant
  title?: string
  titleTag?: string
  text?: string
}

const props = withDefaults(defineProps<BCardBodyProps>(), {
  bodyTag: 'div',
  overlay: false,
  titleTag: 'h4',
  subTitleTag: 'h4',
})

const overlayBoolean = useBooleanish(toRef(props, 'overlay'))

const classes = computed(() => ({
  'card-img-overlay': overlayBoolean.value,
  [`text-${props.bodyTextVariant}`]: props.bodyTextVariant !== undefined,
  [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant !== undefined,
}))
</script>
