<template>
    <section class="padding-top-and-bottom"
    
       :class="[ $vuetify.breakpoint.xsOnly ? 'padding-top-and-bottom-alt' : 'padding-top-and-bottom']"
    >
<slot></slot>
    </section>
</template>
