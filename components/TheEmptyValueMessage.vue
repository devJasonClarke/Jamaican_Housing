<template>
    <SectionPadding>
      <v-sheet
        height="200px"
        class="d-flex justify-center align-center flex-column pa-3" 
        outlined
        ><p class="text-body-1 text-sm-h6 text-center font-weight-regular">
          No properties as yet
           <br>Add your first propery today
        </p>
        <v-btn nuxt :to="{name: 'dashboard-add-property'}" dark color="green accent-4">Add Property</v-btn>
      </v-sheet>
    </SectionPadding>
</template>

<script>
    export default {
        
    }
</script>