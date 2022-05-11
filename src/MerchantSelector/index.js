import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  PaddingTop,
  MarginVertical,
  PaddingHorizontal,
  TextBtn,
  H1,
  H2,
  H3,
  Row,
  useThemeContext,
} from "@servesall/atoms";
import { AccordionItem } from "../Accordion";

const MerchantSelector = React.memo(
  ({ merchants, onChange = () => {}, page = "" }) => {
    const [closeItem, setCloseItem] = useState(false);
    const [selected, setSelected] = useState(false);
    const theme = useThemeContext();

    useEffect(() => {
      selected && onChange(selected);
    }, [selected]);

    useEffect(() => {
      if (merchants) {
        setSelected(merchants[0].merchant);
        onChange(merchants[0].merchant);
      }
    }, [merchants]);

    return (
      <View style={{ backgroundColor: theme.color1 }}>
        <PaddingHorizontal
          style={{ borderBottomWidth: 2, borderColor: theme.color7 }}
        >
          <PaddingHorizontal>
            <PaddingTop>
              <View>
                <AccordionItem
                  key={"MerchantBookings"}
                  eventKey={"MerchantBookings"}
                  closeItem={closeItem}
                  onChange={() => setCloseItem(false)}
                >
                  <AccordionItem.Head lightContent={false}>
                    <MarginVertical>
                      <H3 color={theme.color2}>
                        {selected
                          ? selected.profile?.name
                          : merchants[0]?.merchant?.profile?.name || null}
                      </H3>
                      <H2 color={theme.color2}>{page}</H2>
                    </MarginVertical>
                  </AccordionItem.Head>
                  <AccordionItem.Body isNormal={true}>
                    {merchants.map(({ merchant }, index) => {
                      return (
                        <MarginVertical key={index}>
                          <Row>
                            <TextBtn
                              borderColorActive={theme.color9}
                              borderColorIdle={theme.color10}
                              style={{
                                borderWidth: 1,
                                borderColor: theme.color10,
                              }}
                              onClick={() => {
                                setSelected(merchant);
                                setCloseItem(true);
                              }}
                            >
                              <MarginVertical>
                                <H2 color={theme.color2}>
                                  {merchant?.profile?.name || null} {page}
                                </H2>
                              </MarginVertical>
                            </TextBtn>
                          </Row>
                        </MarginVertical>
                      );
                    })}
                  </AccordionItem.Body>
                </AccordionItem>
              </View>
            </PaddingTop>
          </PaddingHorizontal>
        </PaddingHorizontal>
      </View>
    );
  }
);

export default MerchantSelector;
