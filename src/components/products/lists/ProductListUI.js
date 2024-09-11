import GlobalFrame from "../../GlobalFrame";
import * as S from "./ProductList.style";
import useProductList from "./ProductListHook";

export default function ProductListUI() {
    const queryRes = useProductList();
    return (
        <>
            <GlobalFrame pageTitle={"Products"}></GlobalFrame>
            <S.Container>
                <S.Wrapper>
                    {queryRes.loading
                        ? "LOADING..."
                        : queryRes.data.fetchAll
                        ? queryRes.data.fetchAll.map((v) => (
                              <S.ProductContainer
                                  column
                                  key={v.jewelleryId}
                              >
                                  <S.Image />
                                  <S.InfoWrapper>
                                      <S.TitleContainer>
                                          <S.TitleWrapper>
                                              <S.MainTitle>
                                                  {v.name}
                                              </S.MainTitle>
                                              <S.Writer>{v.englishName}</S.Writer>
                                          </S.TitleWrapper>
                                      </S.TitleContainer>
                                      <S.DivideLine />
                                      <S.ContentWrapper>
                                          <S.MainContent>
                                              {v.price}
                                          </S.MainContent>
                                      </S.ContentWrapper>
                                  </S.InfoWrapper>
                              </S.ProductContainer>
                          ))
                        : "게시물이 존재하지 않습니다(단호)"}
                </S.Wrapper>
            </S.Container>
        </>
    );
}

