import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { LoadingIndicatorPage } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import { useModels } from '../../hooks';

import { Block, Container, P, Separator } from './components';
import SocialLink from './SocialLink';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/ArthurPedroti',
  }
];

const HomePage = () => {
  const {  isLoading: isLoadingForModels } = useModels();

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <h2 id="mainHeader">Bem vindo a Won Games!</h2>
              <P>Ao lado você pode inserir diferentes jogos, categorias e publishers para a nossa maravilhosa loja de jogos!</P>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <P>Arthur Totola Pedroti</P>
            </Block>
          </div>

          <div className="col-md-12 col-lg-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <P style={{ marginTop: 7, marginBottom: 0 }}>Em caso de dúvidas, me contate no Github!</P>

              <Separator style={{ marginTop: 18 }} />
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
