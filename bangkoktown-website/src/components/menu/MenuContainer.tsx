import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MenuContainerProps } from "../../types";
import { MenuItem } from "./MenuItem";
import { MenuFilters } from "./MenuFilters";
import { Button, Heading1, Heading2, BodyText, Card } from "../ui";
import { LanternIcon } from "../ui/ThaiIcons";
import {
  menuItems,
  menuCategories,
  getFeaturedItems,
} from "../../data/menuData";

export const MenuContainer: React.FC<MenuContainerProps & { searchTerm: string; isVegOnly: boolean; setSearchTerm: (term: string) => void; setIsVegOnly: (vegOnly: boolean) => void; }> = ({
  isPreview = false,
  maxItems = 6,
  searchTerm,
  isVegOnly,
  setSearchTerm,
  setIsVegOnly,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  

  // Handle URL parameters for category filtering
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const featuredParam = searchParams.get("featured");

    if (
      categoryParam &&
      menuCategories.find((cat) => cat.id === categoryParam)
    ) {
      setActiveCategory(categoryParam);
    } else if (featuredParam === "true") {
      setActiveCategory("all");
    }
  }, [searchParams]);

  const availableCategories = useMemo(() => {
    return menuCategories.map((cat) => cat.id);
  }, []);

  const filteredItems = useMemo(() => {
    let items = menuItems;

    // Apply category filter first
    if (activeCategory !== "all") {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Apply search filter
    if (searchTerm) {
      const lowercaseQuery = searchTerm.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(lowercaseQuery) ||
          item.description?.toLowerCase().includes(lowercaseQuery),
      );
    }

    // Apply vegetarian filter
    if (isVegOnly) {
      items = items.filter((item) => item.isVeg || item.hasVegOption);
    }

    // For preview mode, get featured items or slice the filtered results
    if (isPreview) {
      if (activeCategory === "all" && !searchTerm && !isVegOnly) {
        // Show featured items when no filters are applied in preview mode
        return getFeaturedItems(maxItems);
      } else {
        // Show filtered results in preview mode
        return items.slice(0, maxItems);
      }
    }

    return items;
  }, [activeCategory, searchTerm, isVegOnly, isPreview, maxItems]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  

  if (isPreview) {
    return (
      <div className="space-y-8 bg-white rounded-2xl p-8 shadow-lg">
        <div className="text-center">
          <Heading2 className="mb-4">Featured Dishes</Heading2>
          <BodyText className="max-w-2xl mx-auto text-thai-warmGray">
            Discover our most popular authentic Thai dishes, crafted with
            traditional recipes and premium ingredients.
          </BodyText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="group"
            onClick={() => navigate("/menu")}
          >
            <span>View Full Menu</span>
            <LanternIcon
              size={20}
              className="ml-2 group-hover:animate-bounce"
            />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      

      {/* Filters */}
      <MenuFilters
        categories={availableCategories}
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        isVegOnly={isVegOnly}
        onCategoryChange={handleCategoryChange}
        onSearchChange={setSearchTerm}
        onVegToggle={setIsVegOnly}
      />

      {/* View Mode Toggle */}

      {/* Results Count */}
      <div className="text-center">
        <BodyText className="text-thai-warmGray">
          Showing {filteredItems.length} dish
          {filteredItems.length !== 1 ? "es" : ""}
          {activeCategory !== "all" && (
            <span>
              {" "}
              in {menuCategories.find((cat) => cat.id === activeCategory)?.name}
            </span>
          )}
          {searchTerm && <span> matching "{searchTerm}"</span>}
          {isVegOnly && <span> (vegetarian only)</span>}
        </BodyText>
      </div>

      {/* Menu Items */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Card
          variant="transparent"
          className="text-center p-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl"
        >
          <LanternIcon
            size={64}
            color="white"
            className="mx-auto mb-4 opacity-50"
          />
          <Heading2 className="text-xl mb-4 text-white">
            No dishes found
          </Heading2>
          <BodyText className="text-white/70 mb-6">
            Try adjusting your filters or search terms to find what you're
            looking for.
          </BodyText>
          <Button
            variant="outline"
            onClick={() => {
              setActiveCategory("all");
              setSearchTerm("");
              setIsVegOnly(false);
            }}
          >
            Clear All Filters
          </Button>
        </Card>
      )}
    </div>
  );
};

