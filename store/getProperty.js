export const state = () => ({
  property: {}
});

export const getters = {
  property: state => state.property
};

export const actions = {
  async getTheProperty({ commit }, slug) {
    console.log('Up')
    await this.$fire.firestore
      .collection("properties")
      .doc(slug)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          this.property = doc.data();
          commit("PROPERTY", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(error => {
        console.log("Error getting document:", error);
      });
  }
};

export const mutations = {
  PROPERTY: (state, data) => {
    state.property = data;
  }
};
