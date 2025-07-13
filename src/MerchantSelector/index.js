import React, { useEffect, useState } from "react";
import { View } from "react-native";
import {
  PaddingTop,
  MarginVertical,
  PaddingHorizontal,
  MarginBottom,
  Switch,
  H2,
  H3,
  Margin,
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
      if (merchants && merchants.length > 0) {
        setSelected(merchants[0].merchant);
        onChange(merchants[0].merchant);
      }
    }, [merchants]);

    if (merchants && merchants.length === 0) {
      return null;
    }

    if (
      merchants &&
      merchants.length === 1 &&
      !merchants[0].merchant?.profile?.name
    ) {
      return null;
    }

    return (
      <View style={{ backgroundColor: theme.color1, minHeight: 90 }}>
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
                      {merchants && merchants.length > 0 && (
                        <H3 color={theme.color2}>
                          {selected
                            ? selected.profile?.name
                            : merchants[0]?.merchant?.profile?.name || null}
                        </H3>
                      )}
                    </MarginVertical>
                  </AccordionItem.Head>
                  <AccordionItem.Body isNormal={true}>
                    {merchants.map(({ merchant }, index) => {
                      return (
                        <MarginBottom key={index}>
                          <Switch
                            fat={true}
                            radio={true}
                            style={{
                              backgroundColor: selected
                                ? theme.color11light
                                : theme.color1,
                            }}
                            value={selected}
                            borderColor={selected ? theme.green : theme.color7}
                            onValueChange={(value) => {
                              setSelected(merchant);
                              setCloseItem(true);
                            }}
                          >
                            <Margin>
                              <H3
                                color={
                                  selected ? theme.greenDark : theme.color2
                                }
                              >
                                {merchant?.profile?.name || null} {page}
                              </H3>
                            </Margin>
                          </Switch>
                        </MarginBottom>
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
