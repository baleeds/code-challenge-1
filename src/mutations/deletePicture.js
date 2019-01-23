import gql from 'graphql-tag';
import {client} from '../apollo';
import { query } from '../components/PicturesQR';

const mutation = gql`
  mutation DeletePictureMutation($id: ID!) {
    deletePicture(id: $id) {
      deletedPictureId
    }
  }
`;

const update = (proxy, { data: { deletePicture } }) => {
  const oldData = proxy.readQuery({ query });
  console.log(oldData);
  proxy.writeQuery({ query, data: {
    ...oldData,
    pictures: oldData.pictures.filter(picture => picture.id !== deletePicture.deletedPictureId),
  }});
}

const deletePicture = (id) => {
  client.mutate({
    mutation,
    variables: { id },
    update,
  })
};

export default deletePicture;